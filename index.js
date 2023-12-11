function scanAccessibilityAttributes(){
    const allElements = document.querySelectorAll('*');
    const requiredAttributes = [];

    allElements.forEach(element => {
        if(element.offsetWidth > 0 || element.offsetHeight > 0){
            const missingAttributes = requiredAttributes.filter(attribute => !element.hasAttribute(attribute));
            if(missingAttributes.length > 0){
                alert(`Element with tag ${element.tagName} is missing the following accessibility attributes: ${missingAttributes.join(', ')}`);
            }
        }
    });
}

scanAccessibilityAttributes();

//Publish your package to npm:

// For private packages and unscoped packages, use npm publish.
// For scoped public packages, use npm publish --access public
// On the command line, create a new test directory outside of your project directory.

// mkdir test-directory
// Switch to the new directory:

// cd /path/to/test-directory
// In the test directory, install your module:

// npm install <your-module-name>
// In the test directory, create a test.js file which requires your module and calls your module as a method.

// On the command line, run node test.js. The message sent to the console.log should appear.

// exports.printMsg = function() {
//     console.log("This is a message from the demo package");
// }