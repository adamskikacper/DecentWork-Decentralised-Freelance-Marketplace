import { useNavigate } from "react-router-dom";
import { ErrorPageTemplate } from "@/components/templates";

export const NotFoundPage = () => {
 const navigate = useNavigate();

 const handleGoHome = () => {
  navigate("/");
 };

 return <ErrorPageTemplate statusCode={404} onGoHome={handleGoHome} />;
};
