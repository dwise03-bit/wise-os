const si = require("systeminformation");

module.exports = (app) => {
    app.get("/system", async (req, res) => {
        try {
            const cpu = await si.cpu();
            const mem = await si.mem();
            const os = await si.osInfo();
            const fs = await si.fsSize();
            const temp = await si.cpuTemperature();

            res.json({
                hostname: os.hostname,
                platform: os.platform,
                distro: os.distro,
                kernel: os.kernel,
                cpu: {
                    manufacturer: cpu.manufacturer,
                    brand: cpu.brand,
                    cores: cpu.cores
                },
                memory: {
                    total: mem.total,
                    used: mem.used,
                    free: mem.free
                },
                temperature: temp.main,
                disks: fs.map(d => ({
                    fs: d.fs,
                    size: d.size,
                    used: d.used
                }))
            });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });
};
