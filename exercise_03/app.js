function addNum() {
    num1 = parseInt(document.formData.input1.value);
    num2 = parseInt(document.formData.input2.value);
    num3 = num1 + num2;
    document.formData.output.value = num3;
}
function subNum() {
    num1 = parseInt(document.formData.input1.value);
    num2 = parseInt(document.formData.input2.value);
    num3 = num1 - num2;
    document.formData.output.value = num3;
}
function mulNum() {
    num1 = parseInt(document.formData.input1.value);
    num2 = parseInt(document.formData.input2.value);
    num3 = num1 * num2;
    document.formData.output.value = num3;
}
function divNum() {
    num1 = parseInt(document.formData.input1.value);
    num2 = parseInt(document.formData.input2.value);
    num3 = num1 / num2;
    document.formData.output.value = num3;
}