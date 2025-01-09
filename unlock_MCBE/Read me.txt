<instruct!>
S1: Install  "IObit unlocker"(in unlockfile);
S2: Unlock and delete file name: "Windows.ApplicationModel.Store.dll" in System32(Win) and SysWOW64(Win:x64);
S3: access folder x64 or x32 [
	if pc x64:
		S1: Copy file "Windows.ApplicationModel.Store.dll" in System32 to System32(Win);
		S2: Copy file "Windows.ApplicationModel.Store.dll" in SysWOW64 to SysWOW64(Win);

	if pc x32:
		S1: Copy file "Windows.ApplicationModel.Store.dll" in System32 to System32(Win);
]
end.
<? this file instruct was edited>


