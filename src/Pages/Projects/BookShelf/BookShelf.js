import { Link } from "react-router-dom";
import book from "../../../Images/bookshelf/book.png";
import book1 from "../../../Images/bookshelf/book1.png";
import book2 from "../../../Images/bookshelf/book2.png";
import book4 from "../../../Images/bookshelf/book4.png";

const BookShelf = () => {
    return (
        <div className="my-5">
            <div className="grid place-items-center">
                <div className="grid grid-cols-3 gap-4 p-5 max-w-screen-lg">
                    <div className=" rounded-lg col-span-3">
                        <img src={book} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={book1} alt="" />
                    </div>
                    <div className=" rounded-lg row-span-2">
                        <img src={book4} alt="" />
                    </div>
                    <div className=" rounded-lg col-span-2">
                        <img src={book2} alt="" />
                    </div>
                </div>
            </div>
            <div className="grid place-items-center">
                <div className="text-center max-w-screen-lg">
                    <h1 className=" text-5xl font-bold my-5 text-accent">
                        BookShelf
                    </h1>
                    <p>
                        The project is an online book archive system built using
                        React and Redux, providing a user-friendly interface for
                        managing books. Users can sign up, log in, and view a
                        list of books, including the top 10 recently added ones
                        on the homepage. The system allows users to search and
                        filter books based on criteria such as title, author,
                        and genre. Authenticated users can add new books and
                        leave reviews. Detailed book information, including
                        title, author, genre, publication date, and reviews, is
                        displayed on the book details page. Users can also edit
                        and delete books, with appropriate notifications for
                        success or failure. The project incorporates various
                        technologies to ensure efficient and accurate search,
                        filtering, and data manipulation functionalities.
                    </p>
                </div>
                <div>
                    <h1 className="text-2xl text-center font-bold mt-5">
                        Technologies <span className="text-accent">Used</span>
                    </h1>
                    <div className="text-center pt-5 px-10">
                        <div className="badge mx-2">TypeScript</div>
                        <div className="badge mx-2">React</div>
                        <div className="badge mx-2">React Router</div>
                        <div className="badge mx-2">Redux</div>
                        <div className="badge mx-2">Redux Icon</div>
                        <div className="badge mx-2">Redux Hot Toast</div>
                        <div className="badge mx-2">Tailwind</div>
                        <div className="badge mx-2">DaisyUi</div>
                        <div className="badge mx-2">Firebase</div>
                        <div className="badge mx-2">Mongoose</div>
                        <div className="badge mx-2">MongoDB</div>
                        <div className="badge mx-2">Vercel</div>
                        <div className="badge mx-2">Git</div>
                    </div>
                </div>
                <div className="flex">
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//bookshelf-zhshuvo.vercel.app/",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">Visit</button>
                    </Link>
                    <Link
                        className="pt-5 px-2"
                        to={{
                            pathname: "//github.com/zhSHUVO/bookshelf",
                        }}
                        target="_blank"
                    >
                        <button className="btn btn-accent px-10">GitHub</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookShelf;
