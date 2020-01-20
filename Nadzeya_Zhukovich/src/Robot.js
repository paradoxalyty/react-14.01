export class Robot {
    dictionary() {
        return [
            {userMessage: 'Hello', answer: 'Hi! How are you?'},
            {userMessage: 'Ok', answer: 'It is great!'},
            {userMessage: 'Bye', answer: 'Bye!'},
        ]
    }

    answer(userMessage, defaultMessage) {
        const result = this.dictionary().filter(data => data.userMessage.toLowerCase() === userMessage.toLowerCase());
        return result.length > 0 ? result[0].answer : defaultMessage;
    }
}
