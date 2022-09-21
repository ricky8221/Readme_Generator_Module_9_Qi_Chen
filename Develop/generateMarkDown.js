function generateMarkDown(data){

    return`
        #${data.title}

        License: ${data.license}

        Github: ${data.github}

        Email: ${data.email}

        ### Description
        - What is your motivation?
        ${data.motivation}

        - Why did you build this porject?
        ${data.purpose}

        - What problem does it solve?
        ${data.solved}

        - What did you learn?
        ${data.learned}

        ## Table of Contents
        Installation: ${data.installation}
        Usage: ${data.usage}
        Credit: ${data.credit}
        Test: ${data.test}

        ## Installation 
        ${data.installStep}

        ## Feature
        ${data.feature}

        ## How to contributing
        ${data.contributing}

        ## Tests
        ${data.testDetail}

        ----------------------------------------------------------------
                                Thank you !!!!
        ----------------------------------------------------------------


    `
}

module.exports = generateMarkDown;