export default class NginxComponent implements ServerButlerComponent {
    name: string
    useDocker: boolean
    private connections: Set<ButlerComponent> = new Set<ButlerComponent>()

    constructor(name: string, useDocker: boolean) {
        this.name = name
        this.useDocker = useDocker
    }

    cancelConnection(component: ButlerComponent): void {
        this.connections.delete(component)
    }

    connect(component: ButlerComponent): void {
        this.connections.add(component)
    }

    getConnections(): ButlerComponent[] {
        return Array.from(this.connections)
    }
}
