declare interface ButlerComponent {
    name: string
    connect: (component: ButlerComponent) => void
    cancelConnection: (component: ButlerComponent) => void
    getConnections: () => ButlerComponent[]
    useDocker: boolean
}