function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validateMail() {
    const $result = $("#reqmail");
    const email = $("#mail").val();
    $result.css("display", "none");

    if (validateEmail(email)) {
        $result.css("display", "block");
    }
}

function validatePassword() {
    const $results = $(".requiredPass");
    const pass1 = $("#pass1").val();
    const pass2 = $("#pass2").val();
    $results.css("display", "none");

    if (pass1.length > 3 && pass1 == pass2) {
        $results.css("display", "block");
    }
}
function validateName() {
    const $result = $("#reqname");
    const name = $("#name").val();
    $result.css("display", "none");
    if (name.length > 5) {
        $result.css("display", "block");
    }
}

$("#mail").on("input", validateMail);
$("#pass2").on("input", validatePassword);
$("#pass1").on("input", validatePassword);
$("#name").on("input", validateName);


