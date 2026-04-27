/**
 * Declarações de tipo para módulos CSS.
 * Permite importar arquivos .css/.scss em TypeScript sem erros de tipo.
 */
declare module '*.css' {
  const estilos: Record<string, string>
  export default estilos
}

declare module '*.scss' {
  const estilos: Record<string, string>
  export default estilos
}
