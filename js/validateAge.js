export default function isValidAge(field) {
    const today = new Date();
    const birthday = new Date(field.value);

    let diffYears = today.getFullYear() - birthday.getFullYear();

    if ( new Date(today.getFullYear(), today.getMonth(), today.getDate()) < new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate()) ) {
        diffYears--;
    }
        

    return diffYears >= 18;
}