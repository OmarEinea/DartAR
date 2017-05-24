#pragma strict

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter(col:Collider) {
	print("Hit Dartboard");
	col.transform.GetComponent.<Rigidbody>().velocity = Vector3.zero;
	col.transform.GetComponent.<Rigidbody>().isKinematic = true;
	col.transform.SetParent(transform.parent.parent);
}