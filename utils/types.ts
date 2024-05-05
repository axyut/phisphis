export type UserInfo = {
    uuid: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    iat: number;
    exp: number;
};

// type SocialNamesType = {
//     google: string;
//     facebook: string;
//     instagram: string;
// };
// type SocialLoginType = {
//     simpleLogin: string;
//     offerLogin: string;
//     horoscopeLogin: string;
// };

// export const SocialNames: SocialNamesType = {
//     google: "Google",
//     facebook: "Facebook",
//     instagram: "Instagram",
// };

// export const SocialLogin: SocialLoginType = {
//     simpleLogin: "Simple Login",
//     offerLogin: "Offer Login",
//     horoscopeLogin: "Horoscope Login",
// };

export const SocialNamesTypes = ["Google", "Facebook", "Instagram"];
export const SocialLoginTypes = [
    "Simple Login",
    "Offer Login",
    "Horoscope Login",
];
