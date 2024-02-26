# Projeto react - Ciclo de vida

## Mounting: Quando é criado o componente
    - constructor()
    - getDerivedStateFromProps()
    - render()
    - componentDidMount()

## Updating: Quando é necessário alterar algo de um componente já criado
    - getDerivedStateFromProps()
    - ShouldComponentUpdate()
    - render()
    - getSnapshotBeforeUpadate()
    - componentDidUpdate()

## Unmounting: Quando o componente é removido
    - componentWillUnmount()