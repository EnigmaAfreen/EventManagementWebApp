//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpRequest;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.servlet.mvc.method.annotation.ResponseBodyAdvice;
//
//@ControllerAdvice
//public class ReferrerPolicyAdvice implements ResponseBodyAdvice<Object> {
//
//    @Override
//    public Object beforeBodyWrite(Object body, HttpHeaders headers, HttpMethod method, HttpRequest request) {
//        headers.add(HttpHeaders.REFERRER_POLICY, "strict-origin-when-cross-origin");
//        return body;
//    }
//
//    @Override
//    public boolean supports(Class<?> returnType, Class<?> converterType) {
//        return true; // Applies to all responses
//    }
//}
