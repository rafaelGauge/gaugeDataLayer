# gaugeDataLayer

Implementação de padrão de atributos para facilitar o tagueamento para o GTM.

***

## Dependências

- JQUERY

***

# Tagueamento através de atributos dos elementos HTML

## Input

Atributos

- **data-event** = nome do evento (ex: data-event='form').
- **data-actor** = ator do evento (ex: data-actor='user').
- **data-action** = ação que dispara o datalayer (ex: data-action='focusout').
- **data-props** = propriedades do evento (FORMATO JSON, ex: '{"formName": "contato-unidade", "field-name": "cidade"}').
- **data-value** = passar atributo vazio caso seja preciso passar o valor do campo para o datalayer.

### Exemplo de Campos de formulário

``
<input data-event='form' data-actor='user' data-action='focusout' data-props='{"formName": "contato-unidade", "field-name": "cidade"}' data-value />
``

``
<select data-event='form' data-actor='user' data-action='focusout' data-props='{"formName": "contato-unidade", "field-name": "unidade"}'
data-value >
    <option value='1'>1</option>
    <option value='2'>2</option>
    <option value='3'>3</option>
    <option value='4'>4</option>
    <option value='5'>5</option>
</select>
``

``
<textarea data-event='form' data-actor='user' data-action='focusout' data-props='{"formName": "contato-unidade", "field-name": "cidade"}' data-value></textarea>
``

## Link

Atributos

- **data-event** = nome do evento (ex: data-event='form')
- **data-actor** = ator do evento (ex: data-actor='user')
- **data-action** = ação que dispara o datalayer (ex: data-action='focusout')
- **data-content** = texto qualquer
- **data-label** = texto qualquer

### Exemplo de Link
``
<a data-event='interaction' data-actor='user' data-action='link-click' data-content='Teste' data-label='Label do link'>Link</a>
``

## Botão

Atributos

- **data-event** = nome do evento (ex: data-event='form')
- **data-actor** = ator do evento (ex: data-actor='user')
- **data-action** = ação que dispara o datalayer (ex: data-action='focusout')
- **data-props** = propriedades do evento (FORMATO JSON, ex: '{"formName": "contato-unidade", "field-name": "cidade"}')

### Exemplo de Botão
``
<button data-event='form' data-actor='user' data-action='submit' data-props='{"formName": "newsletter", "status": "intent"}'>submit</button>
``

# Tipos de Interação

Informado através do atributo _data-action_.

**submit** = Datalayer disparado na submissão do formulário.  
**fill** = Datalayer disparado a cada mudança de valor de um campo.  
**focusout** = Datalayer disparado na troca do foco do campo.  
**link-click** = Datalayer disparado no click de algum link.

