import './main.css'
export const Main = ({ children }) => {
    return (
        <main>
            <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
            {children}
        </main>
    );
}