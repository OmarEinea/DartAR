#pragma strict

private var rb:Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
	rb.AddForce(Quaternion.Euler(Random.Range(0, 15), 0, 0) * transform.forward * 200);
}

function Update () {
	transform.forward = rb.velocity;
	DestroyIfNotEnabled();
}

function DestroyIfNotEnabled() {
	yield WaitForSeconds(5);
	if(enabled) Destroy(gameObject);
}