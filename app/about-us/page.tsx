import dynamic from "next/dynamic";

const AboutComponent = dynamic(() => import("@/components/AboutComp"), {
    ssr: false, // Disable server-side rendering
});

const AboutPage = () => {
    return <AboutComponent />;
};

export default AboutPage;