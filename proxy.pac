function FindProxyForURL(url, host) {
	// TODO: deploy to real host
	PROXY = "HTTP 192.168.0.105:8080"

	if (shExpMatch(host, "*.notion.*")) {
		return PROXY;
	}

	return "DIRECT";
}
