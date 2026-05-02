interface Connector {
    doConnect() : boolean;
}

export class WifiConnector implements Connector {
    public doConnect():boolean{
        console.log("this is wifiConnector");
        return true;
    }
} 

export class BluetoothConnector implements Connector {
    public doConnect():boolean{
        console.log("this is BluetoothConnector");
        return true;
    }
}

// now create dependancy injection
export class System {
    constructor(private connector: Connector){}

    public startConnection(): void{
        this.connector.doConnect();
    }
}

new System(new WifiConnector()).startConnection();
new System(new BluetoothConnector()).startConnection();

