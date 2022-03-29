export const TokenString = "token";



const AuthClass = {

    getLocalData(){
        try {
            if (typeof window !== "undefined") {
              return localStorage.getItem(TokenString);
            }
          } catch (error) {}
    }
     
   
}
export default AuthClass


export const BASEURL = "http://localhost:8080";