
    const first = document.getElementById("input-first");
    const password = document.getElementById("input-password");
    const email = document.getElementById("input-email");
    const select = document.getElementById("input-age");
    const check = document.getElementById("input-alive");

const init = function() {
    document.getElementById("button-cancel").addEventListener('click',  reset);
    document.getElementById("button-send").addEventListener('click', send);
}

const reset = function(event) {
    // HTML will automatically put the form back to the intitial state
    // unless we do it
    event.preventDefault();
    //we can reset programmatically
    document.getElementById("form-user").reset();

    // Can do anything else here
}


const validate = function() {
    //let valid =  false;
    let failures = [];


    // logic for first (element)
    if (!first.value) {
        failures.push({ input: 'input-first', msg: "Required field" });
    }

    if (!email.value || !email.value.includes('@')) {
        failures.push({ input: 'input-email', msg: "Required field" });
    }

    if (!password.value || password.value.length <= 8) 
    failures.push({ input: 'input-password', msg: "Must be at least 8 characters" });

    // logic for select (element)
    if (select.selectedIndex === 0) { 
    failures.push({ input: 'input-age', msg: "Too young!" });
    }

    if (!check.checked) { 
    failures.push({ input: 'input-alive', msg: "Too dead!" });
    }

return failures;
}

const send = function(event) {
    event.preventDefault();
    // event.stopPropagation(); // bubbling up to any parent element (the click)

    let fails = validate();
    
    if (fails.length === 0) {
        // good to go
        document.getElementById("form-user").onsubmit();
    } else {
        fails.forEach(obj => {
           const field = document.getElementById(obj.input); 
           field.parentElement.classList.add('error');
           field.parentElement.setAttribute('data-errormsg', obj.msg);
        })
    }
}