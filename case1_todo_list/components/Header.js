

function Header ({ $target, initialState }) {
    const $H2 = document.createElement("h2");
    const $form = document.createElement("form");
    const $input = document.createElement("input");
    const $button = document.createElement("button");
    const $i = document.createElement("i");

    $i.className = "fas fa-plus";
    $form.className = "todo_form";
    $input.type = "text";
    $input.placeholder = "할 일을 입력해 주세요.";
    $input.autofocus = "true";
    $input.className = "todo_input";
    $button.type = "submit";
    $button.className = "todo_submit_button";
    $H2.innerText = "TO DO LIST";

    $button.appendChild($i);
    $form.appendChild($input);
    $form.appendChild($button);
    $target.appendChild($H2);
    $target.appendChild($form);

}


export default Header;