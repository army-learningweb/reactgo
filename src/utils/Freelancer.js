const getInitials = (name) => {
    const arrName  = name.trim().split(' ');
    const firtName = arrName[0][0];
    const lastName = arrName[arrName.length - 1][0];
    return `${firtName}${lastName}`.toUpperCase()
}

export {getInitials}