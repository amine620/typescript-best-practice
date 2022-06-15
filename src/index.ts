class Ride{
    static activeRides:number=0

    start(){
        Ride.activeRides++
    }
    stop(){
        Ride.activeRides--
    }
}

let ride=new Ride()
ride.start()