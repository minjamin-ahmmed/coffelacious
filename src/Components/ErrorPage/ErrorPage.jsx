

const ErrorPage = () => {
    return (

            <div className="mt-44">
               <h1 className="font-bold text-center text-error text-6xl mb-5">404 Not Found</h1>
                <h1 className="font-bold text-center text-red-600 text-5xl mb-5">Oops! That page can’t be found.</h1>
                <p className="text-center ">
                        It looks like nothing was found at this location.
                        Maybe try one of the links in the menu or press back to go to the previous page.
                </p>
            </div>
        
    );
};

export default ErrorPage;