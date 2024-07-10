const celciusInput = document.getElementById("celcius")
const fahrenheitInput = document.getElementById("fahrenheit")
const kelvinInput = document.getElementById("kelvin")
const temInput = document.querySelectorAll("input")

temInput.forEach(input => {
    input.addEventListener("input", (e) => {
        // ตัสเลขที่ป้อนเข้ามา
        let temValue = parseFloat(e.target.value)
        // ชื่อหน่วยอุณหภูมิ
        let inputName = e.target.name

        if (isNaN(temValue)) {
            celciusInput.value = ""
            fahrenheitInput.value = ""
            kelvinInput.value = ""
            return
        }

        // กระบวนการแปลงอุณหภูมิ
        if (inputName === "celcius") {
            // c => f
            let fahrenheit = temValue * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)

            // c => k
            let kelvin = temValue + 273.15
            kelvinInput.value = kelvin.toFixed(2)
        }

        if (inputName === "fahrenheit") {
            // f => c
            let celcius = (temValue - 32) / 1.8
            celciusInput.value = celcius.toFixed(2)

            // f => k
            let kelvin = (temValue - 32) / 1.8 + 273.15
            kelvinInput.value = kelvin.toFixed(2)
        }

        if (inputName === "kelvin") {
            // k => c
            let celcius = temValue - 273.15
            celciusInput.value = celcius.toFixed(2)

            // k => f
            let fahrenheit = (temValue - 273.15) * 1.8 + 32
            fahrenheitInput.value = fahrenheit.toFixed(2)
        }
    })
})