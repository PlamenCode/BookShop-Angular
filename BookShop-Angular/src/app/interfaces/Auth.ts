export interface LoginForm{
    email: string,
    password: string
};

export interface RegisterForm{
    email: string,
    password: string,
    repass: string
}

export interface User{
    email: string,
    uid: string
}