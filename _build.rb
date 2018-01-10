#!/usr/bin/env ruby

ret = system("yarn", "run", "gatsby", "build")
exit $?.exitstatus unless ret
