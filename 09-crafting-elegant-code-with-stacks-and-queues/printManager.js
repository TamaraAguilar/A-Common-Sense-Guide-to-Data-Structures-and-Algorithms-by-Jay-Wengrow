class Queue {
    constructor() {
        this.data = [];
    }

    enqueue(element) {
        this.data.push(element);
    }

    dequeue() {
        // Shift method removes and returns the first element of an array
        return this.data.shift();
    }

    read() {
        return this.data[0];
    }
}

class PrintManager {
    constructor() {
        this.queue = new Queue();
    }

    queuePrintJob(document) {
        this.queue.enqueue(document);
    }

    run() {
        // Each time this loop runs, we read the document
        // at the front of the queue
        while(this.queue.read()) {
            // We dequeue the document and print it
            this.print(this.queue.dequeue());
        }
    }

    print(document) {
        console.log("Printing:", document);
        return document;
    }
}

// --- Tests ---
const printer = new PrintManager();
printer.queuePrintJob("Document 1");
printer.queuePrintJob("Document 2");
printer.queuePrintJob("Document 3");
printer.run();

