#!/usr/bin/env ruby

ret = system("./_build.rb")
exit $?.exitstatus unless ret

ret = system("./_deploy.rb")
exit $?.exitstatus unless ret
