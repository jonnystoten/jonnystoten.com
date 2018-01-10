#!/usr/bin/env ruby

ret = system("rsync", "-v", "--checksum", "--recursive", "--compress", "--delete", "public/", "root@jonnystoten.com:/var/www/jonnystoten.com/")
exit $?.exitstatus unless ret
