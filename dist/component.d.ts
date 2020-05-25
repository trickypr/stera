export interface IComponent {
    shadow: ShadowRoot;
    render: () => HTMLElement;
    state: any;
}
export declare class Component extends HTMLElement implements IComponent {
    shadow: ShadowRoot;
    private storedState;
    constructor();
    get state(): any;
    set state(newState: any);
    update(): void;
    render(): HTMLParagraphElement;
}
