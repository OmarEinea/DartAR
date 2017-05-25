#pragma strict

private var rb:Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
	rb.AddForce(Quaternion.Euler(Random.Range(-20, 20), Random.Range(-20, 20), 0) * transform.forward * 10);
}

function Update () {
	transform.forward = rb.velocity;
}
