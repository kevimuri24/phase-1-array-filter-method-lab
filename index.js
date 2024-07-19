findMatching = (drivers, string)=>{
    // Convert search string to lowercase
    const lowerString = string.toLowerCase();

    // Create functiont to filter through the array
    const matchNames = drivers.filter((driver)=>{
        return driver.toLowerCase() === lowerString
    })
     return matchNames
}

fuzzyMatch = (drivers, firsLetter)=>{
    // Convert firstLetter to lowercase
    const lowerLetter = firsLetter.toLowerCase();

    // Filter through the array
    const findMatching = drivers.filter((driver)=>{
        return driver.toLowerCase().startsWith(lowerLetter)
    })
    return findMatching
}

matchName = (drivers, name)=>{
    // Convert name to lower case
    const lowerName = name.toLowerCase();

    // filter through the array
    const matchingDrivers = drivers.filter(driver => {
        return driver.name.toLowerCase() === lowerName;
    })

    return matchingDrivers
}

