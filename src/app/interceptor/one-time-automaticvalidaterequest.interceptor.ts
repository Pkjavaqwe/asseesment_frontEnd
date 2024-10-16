import { HttpInterceptorFn } from '@angular/common/http';

export const oneTimeAutomaticvalidaterequestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("in intercepter");
  
  const token = localStorage.getItem('token');
  console.log("token",token );
  
  // Check if the token exists and clone the request to add the token in the headers
  if (token) {
    console.log("in if of interceptor");
    
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(clonedRequest);
    // Pass the cloned request to the next handler
    return next(clonedRequest);

    
  } else {
    // If no token, pass the original request to the next handler
    return next(req);
  }
};
