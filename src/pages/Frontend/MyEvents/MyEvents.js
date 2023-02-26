import React, { useEffect, useState } from "react";
import EventsCard from '../../../components/Frontend/Events/EventsCard';
import { useAuthContext } from '../../../context/AuthContext';

export default function MyEvents() {
    const { fetchMyEvents, users, Findbooks } = useAuthContext();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetchMyEvents(users.uid).then((value) => setBooks(value.docs));
    }, [fetchMyEvents, users]);
    // console.log(books);
    if (Findbooks) {
        return (
            <div className="py-5">
                <div className="container d-flex justify-content-center align-items-center">
                    <div className="row" style={{ height: "80vh" }}>
                        <div className="col-12">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p>No order Available</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    {books.map((book, i) => {
                        return (
                            <div className="col-12 col-lg-4 my-3" key={i}>
                                <EventsCard
                                    key={i}
                                    {...book.data()}
                                    link={`/dashboard/orders/${book.id}`}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

