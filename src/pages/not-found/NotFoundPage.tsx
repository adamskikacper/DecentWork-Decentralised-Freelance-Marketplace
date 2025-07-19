import { useNavigation } from "@/shared/hooks/ui";
import { ErrorPageTemplate } from "@/components/templates";

export const NotFoundPage = () => {
 const { goHome } = useNavigation();

 return <ErrorPageTemplate statusCode={404} onGoHome={goHome} />;
};
