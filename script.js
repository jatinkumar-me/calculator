//Assigning variables to all the buttons.

class Calculator {
    constructor(input, output) {
        this.inputText = input
        this.outputText = output
        this.clear()
    }
    clear(){
        this.input = ''
        this.output = ''
        this.operation = undefined
    }
    delete(){
        this.output = this.output.toString().slice(0, -1)

    }
    appendNumber(number){
        if (number === '.' && this.output.includes('.')) return
        this.output = this.output.toString() + number.toString()
    }
    chooseOperation(operation){
        if(this.output === '') return
        if (this.input !== '') {
            this.compute()
        }
        this.operation = operation
        this.input = this.output
        this.output = ''
    }
    compute(){
        let computation 
        const prev = parseFloat(this.input)
        const current = parseFloat(this.output)
        if (isNaN(prev) || isNaN(current)) return
        console.log("calcualting...")
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '×':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return

        }
        this.output = computation
        this.operation = undefined
        this.input = ''

    }
    updateDisplay(){
        this.outputText.innerText = this.output
        if (this.input != null) {
            if (this.operation === undefined) this.operation=''            
            this.inputText.innerText = `${this.input} ${this.operation}`
            
        }
    }
}

const numberButton = document.querySelectorAll('.buttonNumber')
const operationButton = document.querySelectorAll('.buttonOperation')
const equalButton = document.querySelector('#buttonEqual')
const acButton = document.querySelector('#buttonAc')
const delButton = document.querySelector('#buttonDel')
const inputText = document.querySelector('.input')
const outputText = document.querySelector('.output')

const calculator = new Calculator(inputText, outputText)

numberButton.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button => {
    button.addEventListener('click', ()=>{
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

acButton.addEventListener('click', ()=>{
    console.log('clicl')
    calculator.clear()
    calculator.updateDisplay()
})

equalButton.addEventListener('click', ()=>{
    calculator.compute()
    calculator.updateDisplay()
})

delButton.addEventListener('click', ()=>{
    calculator.delete()
    calculator.updateDisplay()
})
