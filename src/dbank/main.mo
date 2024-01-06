import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
  stable var currentVariable : Float = 100;
  currentVariable :=100;
    Debug.print(debug_show(currentVariable));

  stable var startTime = Time.now();
  public func topUp(amount: Float) {
    currentVariable+=amount;
  };

  public func withdraw(amount: Float) {
    let tempValue: Float = currentVariable-amount;
    if (tempValue >=0) {
      currentVariable -= amount;
      Debug.print(debug_show(currentVariable));
    } else {
      Debug.print("Not sufficient amount.");
      Debug.print("Hello");
    } 
  };

  public func checkBalance(): async Float {
    return currentVariable;
  };

  public func compound() {
    var currentTime = Time.now();
    var timeElapsedNS =  currentTime - startTime;
    var timeElapsedS = timeElapsedNS/1000000000;
    currentVariable := currentVariable *(1.01**Float.fromInt(timeElapsedS));
    startTime := currentTime;
  }
}