import { IndentedText } from '../types'

export function isIndentedText (text: string | IndentedText): text is IndentedText {
  return typeof text === 'object'
}

export function addIndentation (text: string | IndentedText, indent: number): IndentedText {
  return isIndentedText(text)
    ? { text: text.text, indentation: text.indentation + indent }
    : { text, indentation: indent }
}

export function getIndentation (text: string | IndentedText): number {
  return isIndentedText(text) ? text.indentation : 0
}

export function getText (text: string | IndentedText): string {
  return isIndentedText(text) ? text.text : text
}
