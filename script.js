function generateCode() {
  let textInput = document.getElementById("data").value;

  if (textInput === "") {
    alert("Please input your text or URL");
    return;
  }

  document.getElementById("qrcode").innerHTML = "";

  let qrcode = new QRCode(document.getElementById("qrcode"), {
    text: textInput,
    width: 180,
    height: 180,
  });

  document.getElementById("text-output").textContent = textInput;

  document.getElementById("data").value = "";
}
