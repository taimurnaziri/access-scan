function scanAccessibilityAttributes(){
    const allElements = document.querySelectorAll('*');
    const requiredAttributes = ['aria-label', 'aria-labelledby', 'alt', 'role'];

    allElements.forEach(element => {
        if(element.offsetWidth > 0 || element.offsetHeight > 0){
            const missingAttributes = requiredAttributes.filter(attribute => !element.hasAttribute(attribute));
            if(missingAttributes.length > 0){
                console.log(`Element with tag ${element.tagName} is missing the following accessibility attributes: ${missingAttributes.join(', ')}`);
            }
        }
    });
}

scanAccessibilityAttributes();