class CustomError extends Error {
  constructor (message) {
    super(message)

    if (message instanceof Error) {
      this.stack = message.stack
    }

    this.name = "CustomError"
  }

  toJson () {
    const errorObj = {
      errorType: this.name,
      errorMessage: this.message,
      trace: this.stack.split("\n")
    }

    return errorObj
  }

  toString () {
    return JSON.stringify(this.toJson(), null, 2)
  }
}

module.exports = CustomError
