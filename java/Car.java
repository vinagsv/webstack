public class Car {
    // Fields or attributes or properties.
// int regno = 7238;
String color="red";
int engineCapacity = 900;

Car(){
    System.out.println("Object is created");
}

void accelerate(){
System.out.println( "Car is accelerating");
}

public static void main(String[] args) {
    Car alto=new Car();//object creation
    System.out.println("Alto: ");;
    System.out.println(alto.engineCapacity);
    System.out.println(alto.color);

    
    alto.accelerate();

//     Car benz=new Car();//object creation
//     System.out.println("benz: ");
//     System.out.println(benz.engineCapacity);
    
//     benz.accelerate();
}
}
