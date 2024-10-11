export function authGuards():boolean{
    const token = localStorage.getItem('token')
    if (token!=null) {
        return true
    } else {
        window.alert("please login with your login credentials")
        return false
    }
}