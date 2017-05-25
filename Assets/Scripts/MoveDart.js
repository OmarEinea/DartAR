#pragma strict

function Start () {
	GetComponent.<Rigidbody>().AddForce(/*Quaternion.Euler(Random.Range(-20, 20), Random.Range(-20, 20), 0) **/ transform.forward * 300);

}

function Update () {
	transform.forward = GetComponent.<Rigidbody>().velocity;
}
