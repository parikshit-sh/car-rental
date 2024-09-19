import Content from "./Content";

const Footer = () => {
    return (
        <footer className="relative h-[450px] text-white" 
        style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}>
            <div className="fixed w-full h-[450px] bottom-0 bg-[#121212]">
                <Content />
                </div>
           
        </footer>
    );
};

export default Footer;
