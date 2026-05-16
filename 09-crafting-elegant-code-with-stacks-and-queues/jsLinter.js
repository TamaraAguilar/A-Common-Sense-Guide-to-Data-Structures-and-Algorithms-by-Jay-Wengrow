class Stack {
    constructor() {
        this.data = [];
    }

    // Add an element to the stack
    push(element) {
        this.data.push(element);
    }

    // Take the top element off the stack
    pop() {
        if (this.data.length === 0) 
            return null;
        return this.data.pop();
    }

    // See what the top element is
    read() {
        return this.data[this.data.length - 1];
    }
}

class Linter {
    constructor() {
        this.stack = new Stack();
    }

    lint(text) {
        // We start a loop which reads each character in our text
        for (const char of text) {

            // If the character is an opening brace
            if (this.isOpeningBrace(char)) {
                // We push it onto the stack
                this.stack.push(char);
                // If the character is a closing brace
            } else if (this.isClosingBrace(char)) {
                // Pop from stack
                const poppedOpeningBrace = this.stack.pop();

                // If the stack was empty, so what we popped was null
                // it means an opening brace is missing
                if (!poppedOpeningBrace) {
                    return `${char} doesn't have opening brace`;
                }

                // If the popped opening brace doesn't match the 
                // current closing brace, we produce an error
                if (this.isNotAMatch(poppedOpeningBrace, char)) {
                    return `${char} has mismatched opening brace`;
                }
            }
        }

        // If we get to the end of line, and the stack isn't empty
        if (this.stack.read()) {
            // It means we have an opening brace without a
            // corresponding closing brace, so we produce an error
            return `${this.stack.read()} does not have closing brace`;
        }

        // Return true if line has no errors
        return true
    }

    isOpeningBrace(char) {
        return ["(", "[", "{"].includes(char);
    }

    isClosingBrace(char) {
        return [")", "]", "}"].includes(char);
    }

    isNotAMatch(openingBrace, closingBrace) {
        const matches = {
            "(": ")",
            "[": "]",
            "{": "}"
        }

        return closingBrace !== matches[openingBrace];
    }
}

const lint = text => {
    const linter = new Linter();
    return linter.lint(text);
}

// --- Tests ---
const text = "( var x = { y: [1, 2, 3] } )"
console.log(lint(text)) // Returns true;

console.log(lint("( var x = { y: [1, 2, 3] }"))   // ( does not have closing brace
console.log(lint("( var x = { y: [1, 2, 3] ) }"))  // ) has mismatched opening brace
console.log(lint(") var x = 1"))   // ) doesn't have opening brace